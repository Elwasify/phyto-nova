import { Icon } from "@iconify/react";
import styled from "styled-components";
import photo from "../../assets/abdallah-upper-half.webp";
import { useLanguage } from "../../context/useLanguage";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Elwasify",
    icon: "simple-icons:github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdallah-elwasify/",
    icon: "simple-icons:linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/abdallah.elwasify.31",
    icon: "simple-icons:facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abdallahelwasify_/",
    icon: "simple-icons:instagram",
  },
];

export default function DeveloperCard() {
  const { t } = useLanguage();

  return (
    <StyledWrapper>
      <div className="card">
        <div className="top-section">
          <img
            src={photo}
            alt={t.technicalSupport.name}
            className="user-photo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="bottom-section">
          <span className="title" dir="auto">
            {t.technicalSupport.name}
          </span>
          <p className="subtitle" dir="auto">
            {t.technicalSupport.role}
          </p>
        </div>
        <div
          className="social-panel"
          role="group"
          aria-label={t.technicalSupport.socialLabel}
          dir="ltr"
        >
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              className="social-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon icon={icon} width={22} height={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    width: min(100%, 260px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    padding: 7px;
    overflow: hidden;
    background: var(--color-surface-dark);
    box-shadow: 0 16px 36px rgba(15, 43, 54, 0.28);
    transition: box-shadow 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 22px 46px rgba(15, 43, 54, 0.38);
  }

  .top-section {
    position: relative;
    height: 310px;
    overflow: hidden;
    border-radius: 13px;
    background: var(--color-surface-base);
  }

  .user-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
    object-position: center 14%;
  }

  .bottom-section {
    padding: 10px 8px 8px;
    text-align: center;
  }

  .title {
    display: block;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .subtitle {
    margin: 3px 0 0;
    color: var(--color-forest-300);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .social-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    background: var(--color-surface-dark);
  }

  .social-link {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 0;
    height: 44px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    color: var(--color-forest-300);
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .social-link:hover,
  .social-link:focus-visible {
    transform: translateY(-2px);
    background: var(--color-forest-700);
    color: #ffffff;
    box-shadow: 0 8px 16px rgba(15, 43, 54, 0.28);
  }

  .social-link:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    .card,
    .social-link {
      transition: none;
    }

    .social-link:hover {
      transform: none;
    }
  }
`;
