import { Menu, X } from "lucide-react";
import * as Sheet from "@radix-ui/react-sheet";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="flex md:hidden">
      {/* 點擊 X 關閉選單 */}
      <X className="text-xl" onClick={toggleMenu} />

      {/* 使用 Sheet 元件來顯示側邊欄選單 */}
      <Sheet.Root open={isOpen} onOpenChange={toggleMenu}>
        <Sheet.Trigger asChild>
          <Menu className="text-xl" />
        </Sheet.Trigger>

        {/* Sheet 內容 */}
        <Sheet.Content className="w-full h-full bg-white p-4">
          <div className="space-y-4">
            <ul>
              <li>
                <a href="#">首頁</a>
              </li>
              <li>
                <a href="#">關於我們</a>
              </li>
              <li>
                <a href="#">服務項目</a>
              </li>
            </ul>
          </div>
          <Sheet.Close asChild>
            <button className="text-red-500">關閉</button>
          </Sheet.Close>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  );
};

export default MobileMenu;
