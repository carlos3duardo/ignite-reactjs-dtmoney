import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 1rem;
        margin: 0;
        padding: 0;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: var(--font-semibold);
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #ffffff;
    }
  }
`;