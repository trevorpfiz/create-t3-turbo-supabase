import type { LucideIcon } from "lucide-react-native";
import {
  AlertCircle,
  CheckCircle,
  Info,
  MoonStar,
  Sun,
  XCircle,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

interopIcon(Info);
interopIcon(MoonStar);
interopIcon(Sun);
interopIcon(AlertCircle);
interopIcon(CheckCircle);
interopIcon(XCircle);

export { Info, MoonStar, Sun, AlertCircle, CheckCircle, XCircle };
