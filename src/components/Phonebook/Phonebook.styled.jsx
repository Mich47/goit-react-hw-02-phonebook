import styled from 'styled-components';
import { typography } from 'styled-system';

export const TitleStyled = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.gray};
  text-transform: capitalize;
  text-align: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TextStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
  margin: 0;
`;

export const ButtonStyled = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  text-transform: capitalize;
  ${typography}

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
  ${typography} */
`;

export const LabelStyled = styled.label`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
  ${typography}
`;

export const InputStyled = styled.input`
  padding: 8px;
  font-size: ${p => p.theme.fontSizes.s};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.primary};
  outline-color: ${p => p.theme.colors.primary};
`;

export const ContactsListStyled = styled.ul`
  font-family: ${p => p.theme.fonts.body};
  width: ${p => p.theme.sizes.container}px;
  margin-top: 8px;
  margin-bottom: 0;
  padding-left: 16px;
  /* list-style: inside; */
  display: flex;
  flex-direction: column;
`;

export const ContactsItem = styled.li`
  /* display: flex;
  align-items: center; */
  /* gap: 16px; */
  padding: 8px 8px 8px 0;
  margin-left: 8px;
  /* border: ${p => p.theme.borders.normal}; */
  /* border-color: ${p => p.theme.colors.border}; */
  /* border-radius: ${p => p.theme.radii.normal}; */
  /* box-shadow: ${p => p.theme.shadows.main}; */
`;
