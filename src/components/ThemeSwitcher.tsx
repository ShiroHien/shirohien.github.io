import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    // Light option now uses the purple palette
    { name: "purple", icon: <Palette className="h-4 w-4" />, label: "Light" },
    { name: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <motion.div whileHover={{ rotate: 15 }} whileTap={{ scale: 0.9 }}>
            {theme === "dark" && <Moon className="h-4 w-4" />}
            {theme === "purple" && <Palette className="h-4 w-4" />}
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name as any)}
            className={theme === t.name ? "bg-accent " : ""}
          >
            <div className="flex items-center ">
              {t.icon}
              <span className="ml-2">{t.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
