import { useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useLanguage } from "../../context/useLanguage";

const Card = ({ name, role, photo, socialLinks = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const { t, language } = useLanguage();

  return (
    <StyledWrapper>
      <div className={`card${expanded ? " is-expanded" : ""}`}>
        <button
          type="button"
          className="image-toggle"
          aria-label={`${expanded ? t.presentation.hideDetails : t.presentation.showDetails} ${name}`}
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          <img src={photo} alt="" loading="lazy" decoding="async" />
        </button>
        <div className="content">
          <h3 className="title">
            {name}
            <br />
            <span className={language === "ar" ? "localized-role" : undefined}>
              {role}
            </span>
          </h3>
          {socialLinks.length > 0 && (
            <ul className="sci">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} ${t.presentation.socialLinkLabel} ${social.label}`}
                  >
                    <Icon icon={social.icon} width={20} height={20} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: min(240px, calc(100vw - 2.5rem));
    height: 320px;
    background: #ffffff;
    border: 1px solid var(--color-line, #e3e8ea);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(31, 78, 107, 0.06);
  }

  .card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transform-origin: top center;
    transition: transform 0.5s ease, border-radius 0.5s ease;
  }

  .image-toggle {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .image-toggle:focus-visible {
    outline: 3px solid var(--color-forest-700, #587b64);
    outline-offset: -5px;
  }

  .card.is-expanded img {
    transform: translateY(16px) scale(0.55);
    border-radius: 50%;
  }

  .card .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 22px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .card.is-expanded .content {
    opacity: 1;
    transform: translateY(0);
  }

  .content .title {
    margin: 0;
    padding: 0 14px;
    color: var(--color-navy-900, #1f4e6b);
    font-weight: 600;
    font-size: 1em;
    line-height: 1.4em;
    letter-spacing: 0.03em;
    text-align: center;
  }

  .content .title span {
    display: block;
    margin-top: 6px;
    color: var(--color-forest-800, #4a7c6b);
    font-weight: 500;
    font-size: 0.75em;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .content .title span.localized-role {
    letter-spacing: normal;
    text-transform: none;
  }

  .content .sci {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 12px 0 0;
    padding: 0;
  }

  .sci li {
    list-style: none;
  }

  .sci li a {
    text-decoration: none;
    color: var(--color-forest-800, #4a7c6b);
    background: #eef3f2;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    border: 1px solid var(--color-line, #e3e8ea);
    transition: 0.4s;
  }

  .sci li a:hover,
  .sci li a:focus-visible {
    color: #ffffff;
    background: var(--color-navy-900, #1f4e6b);
  }

  @media (hover: hover) {
    .card:hover img,
    .card:focus-within img {
      transform: translateY(16px) scale(0.55);
      border-radius: 50%;
    }

    .card:hover .content,
    .card:focus-within .content {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (hover: none) {
    .card:hover img {
      transform: none;
      border-radius: 0;
    }

    .card:hover .content {
      opacity: 0;
      transform: translateY(12px);
    }

    .card.is-expanded img {
      transform: translateY(16px) scale(0.55);
      border-radius: 50%;
    }

    .card.is-expanded .content {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .card:hover img,
    .card:focus-within img,
    .card.is-expanded img {
      transform: none;
      border-radius: 0;
    }
  }
`;

export default Card;
