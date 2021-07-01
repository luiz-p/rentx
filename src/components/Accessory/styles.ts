import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    width: 109px;
    height: 92px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

    padding: 16px;
    margin-bottom: 8px;
  `,

  Name: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
  `,
};
