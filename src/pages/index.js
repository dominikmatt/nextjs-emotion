import styled from "@emotion/styled";

export default function IndexPage() {
  return (
    <>
      <h1>IndexPage</h1>
      <IconWrapper className={'icon-chat'} />
    </>
  );
}

const IconWrapper = styled.div`
  &[class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    font-size: 17px;
    line-height: 17px;
    color: red;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &.icon-burger:before {
    content: "\\e900";
  }

  &.icon-calendar:before {
    content: "\\e901";
  }

  &.icon-cart-empty:before {
    content: "\\e902";
  }

  &.icon-chat-new:before {
    content: "\\e903";
  }

  &.icon-chat:before {
    content: "\\e904";
  }

  &.icon-check:before {
    content: "\\e905";
  }

  &.icon-close:before {
    content: "\\e906";
  }

  &.icon-context-menu:before {
    content: "\\e907";
  }

  &.icon-copy:before {
    content: "\\e908";
  }

  &.icon-delete:before {
    content: "\\e909";
  }

  &.icon-dropdown:before {
    content: "\\e90a";
  }

  &.icon-edit:before {
    content: "\\e90b";
  }

  &.icon-facebook:before {
    content: "\\e90c";
  }

  &.icon-faq:before {
    content: "\\e90d";
  }

  &.icon-info-outline:before {
    content: "\\e90e";
  }

  &.icon-info:before {
    content: "\\e90f";
  }

  &.icon-insta:before {
    content: "\\e910";
  }

  &.icon-left-slide:before {
    content: "\\e911";
  }

  &.icon-link-arrow:before {
    content: "\\e912";
  }

  &.icon-linkedin:before {
    content: "\\e913";
  }

  &.icon-locate:before {
    content: "\\e914";
  }

  &.icon-location:before {
    content: "\\e915";
  }

  &.icon-logout:before {
    content: "\\e916";
  }

  &.icon-map-off:before {
    content: "\\e917";
  }

  &.icon-map-pin:before {
    content: "\\e918";
  }

  &.icon-map:before {
    content: "\\e919";
  }

  &.icon-minus:before {
    content: "\\e91a";
  }

  &.icon-money:before {
    content: "\\e91b";
  }

  &.icon-pdf:before {
    content: "\\e91c";
  }

  &.icon-phone:before {
    content: "\\e91d";
  }

  &.icon-pickup:before {
    content: "\\e91e";
  }

  &.icon-plus:before {
    content: "\\e91f";
  }

  &.icon-right-slide:before {
    content: "\\e920";
  }

  &.icon-right:before {
    content: "\\e921";
  }

  &.icon-safe:before {
    content: "\\e922";
  }

  &.icon-search:before {
    content: "\\e923";
  }

  &.icon-share1:before {
    content: "\\e924";
  }

  &.icon-share:before {
    content: "\\e925";
  }

  &.icon-shield:before {
    content: "\\e926";
  }

  &.icon-sort-down:before {
    content: "\\e927";
  }

  &.icon-spinwheel:before {
    content: "\\e928";
  }

  &.icon-time:before {
    content: "\\e929";
  }

  &.icon-twitter:before {
    content: "\\e92a";
  }

  &.icon-undo:before {
    content: "\\e92b";
  }

  &.icon-user:before {
    content: "\\e92c";
  }

  &.icon-Verfugbarkeit:before {
    content: "\\e92d";
  }

  &.icon-view-on:before {
    content: "\\e92e";
  }

  &.icon-warning:before {
    content: "\\e92f";
  }

  &.icon-whatsapp:before {
    content: "\\e930";
  }

  &.icon-X-Close:before {
    content: "\\e931";
  }

  &.icon-xing:before {
    content: "\\e932";
  }

  &.icon-youtube:before {
    content: "\\e933";
  }

  &.icon-zoom:before {
    content: "\\e934";
  }

  &.icon-zustellung:before {
    content: "\\e935";
  }
`;
