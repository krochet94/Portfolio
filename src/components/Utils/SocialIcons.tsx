import { usePortfolioContent } from "../../content/PortfolioContentContext";
import { getIconComponent } from "../../content/iconMap";

interface SocialIconsProps {
  ulClassName?: string;
  liClassName?: string;
}

function SocialIcons({ ulClassName, liClassName }: SocialIconsProps) {
  const { content } = usePortfolioContent();

  return (
    <ul className={ulClassName}>
      {content.socialLinks.map((link) => {
        const Icon = getIconComponent(link.icon);
        if (!Icon) {
          return null;
        }

        return (
          <li className={liClassName} key={`${link.platform}-${link.url}`}>
            <a
              href={link.url}
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              title={link.platform}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialIcons;