<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BookController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->query('q');

        if (!$query) {
            return response()->json(['error' => 'Missing query'], 400);
        }

        $apiKey = env('GOOGLE_BOOKS_API_KEY');
        $url = "https://www.googleapis.com/books/v1/volumes?q={$query}&key={$apiKey}";

        $response = Http::get($url);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch books'], 500);
        }

        return response()->json($response->json());
    }
}
