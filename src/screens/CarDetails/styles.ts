import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `,

  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
