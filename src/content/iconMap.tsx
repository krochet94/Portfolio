import type { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";

const iconPacksByPrefix: Record<string, Record<string, unknown>> = {
  Ai: AiIcons,
  Bs: BsIcons,
  Cg: CgIcons,
  Di: DiIcons,
  Fa: FaIcons,
  Io: IoIcons,
  Md: MdIcons,
  Si: SiIcons,
};

const isIconType = (value: unknown): value is IconType => typeof value === "function";

export function getIconComponent(iconName: string): IconType | null {
  if (!iconName) {
    return null;
  }

  const prefix = iconName.slice(0, 2);
  const iconFromPrefixPack = iconPacksByPrefix[prefix]?.[iconName];

  if (isIconType(iconFromPrefixPack)) {
    return iconFromPrefixPack;
  }

  return null;
}
