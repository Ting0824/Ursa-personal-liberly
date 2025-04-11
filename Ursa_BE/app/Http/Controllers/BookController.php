<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BookController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->query('q');
        $type = $request->query('type', 'title'); // 預設為 title

        if (!$query) {
            return response()->json(['error' => 'Missing query'], 400);
        }

        // 判斷是否為 ISBN（10 或 13 碼純數字），不管 type 是什麼都優先處理
        if (preg_match('/^\d{10}(\d{3})?$/', $query) || $type === 'isbn') {
            $query = "isbn:{$query}";
        } elseif ($type === 'author') {
            $query = "inauthor:\"{$query}\"";
        } elseif ($type === 'title') {
            $query = "intitle:\"{$query}\"";
        } else {
            // 萬一傳入奇怪的 type 就 fallback 為模糊搜尋
            $query = "\"{$query}\"";
        }

        $apiKey = env('GOOGLE_BOOKS_API_KEY');
        $url = "https://www.googleapis.com/books/v1/volumes?q={$query}&maxResults=40&orderBy=relevance&key={$apiKey}";

        $response = Http::get($url);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch books'], 500);
        }

        return response()->json($response->json());
    }
}
