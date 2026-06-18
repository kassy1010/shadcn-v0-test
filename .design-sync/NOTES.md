# Design Sync Notes

## 初回同期 (2026-06-18)

### アップロード済みコンポーネント数
- 合計 140 コンポーネント (AccordionContent → TooltipTrigger)
- components/general/: 136、components/registry/: 4 (AddToCursor, ComponentCard, RegistryLogo, RegistrySidebar)

### componentSrcMap で除外したサブコンポーネント (33件)
ProductGrid は `export default function` のため `export *` バレルに含まれず除外。
以下の 32 件はサブコンポーネント（単独ではレンダリングされない）として除外:

AlertTitle, AspectRatio, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbSeparator,
CardHeader, ContextMenuLabel, DrawerFooter, DrawerHeader, DropdownMenuLabel,
InputOTPSeparator, MenubarLabel, NavigationMenuItem, PaginationEllipsis, PaginationItem,
PaginationLink, SheetFooter, SheetHeader, SidebarFooter, SidebarGroup, SidebarGroupLabel,
SidebarHeader, SidebarInput, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub,
SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, TableCaption, TableCell,
TableHead

### バリデーション警告 (81件 RENDER_BLANK)
2 回目のバリデーション実行後、以下の 2 カテゴリが RENDER_BLANK:
1. **サブコンポーネント** (AlertDialogFooter, AlertDialogHeader, SidebarContent, TableBody 等) — 追加除外してもよい
2. **インタラクション依存コンポーネント** (Dialog, Popover, Tooltip, Select 等) — クリック/ホバーで初めて表示されるため preview が空になるのは想定内

バリデーターは exit 0 (警告のみ、ブロッキングなし)。

### 作成したプレビューファイル (.design-sync/previews/)
Avatar, Badge, Button, Checkbox, Input, Menubar, Progress, Promo, Textarea, Toggle

### provider 設定
SidebarProvider を global provider として設定済み (config.json の `provider.component`)。
