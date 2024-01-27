import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Components/Button',
  decorators: [moduleMetadata({ imports: [ButtonComponent] })],
};

export const BaseButton = () => {
  return {
    template: `
        <button
          cba-button
          text="o texto é esse Clique aqui"
          [desabilitar]="true"
        >Clique aqui</button>
    `,
  };
};

export const PrimaryElevationButton = () => {
  return {
    template: `
        <button
          cba-button
          text="o texto é esse Clique aqui"
          [desabilitar]="true"
          [elevation]="1"
          color="primary"
        >Clique aqui</button>
    `,
  };
};

export const SecondaryElevation2Button = () => {
  return {
    template: `
        <button
          cba-button
          text="o texto é esse aqui"
          [desabilitar]="true"
          [elevation]="2"
          color="secondary"
        >Clique aqui</button>
    `,
  };
};

export const OutlineButton = () => {
  return {
    template: `
        <button
          cba-button
          shape="outline"
          text="o texto é esse Clique aqui"
          [desabilitar]="true"
        >Clique aqui</button>
    `,
  };
};

export const OutlinePrimaryButton = () => {
  return {
    template: `
        <button
          cba-button
          shape="outline"
          text="o texto é esse Clique aqui"
          [desabilitar]="true"
          color="primary"
        >Clique aqui</button>
    `,
  };
};

export const OutlineSecondaryButton = () => {
  return {
    template: `
        <button
          cba-button
          shape="outline"
          text="o texto é esse Clique aqui"
          [desabilitar]="true"
          color="secondary"
        >Clique aqui</button>
    `,
  };
};
