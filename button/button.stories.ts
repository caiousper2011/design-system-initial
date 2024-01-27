import type { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    // initialValue: {
    //   description: 'Valor inicial do campo',
    //   name: 'InitialValue',
    //   type: 'number',
    // },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  moduleMetadata: {
    // providers: [{ provide: AddressService, useClass: AddressMockService }],
    // imports: [ReactiveFormsModule],
  },
});

export const Sample = Template.bind({});
Sample.args = {
  // initialValue: 1,
};
