@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
    font-size: 50%;
  }

        .grid{
          gap: 3.2rem;
        }
    .grid-two-column , .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}