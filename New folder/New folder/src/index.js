import r2wc from "@r2wc/react-to-web-component";
import FtUicInput2 from './components/ft-uic-input2.jsx';

const FtUicInput2WC = r2wc(FtUicInput2, {
  props: {
    label: 'string',
    value: 'string',
    disabled: 'boolean',
    readonly: 'boolean',
    required: 'boolean',
    name: 'string',
    placeholder: 'string',
    min: 'number',
    max: 'number',
    minlength: 'number',
    maxlength: 'number',
    invalid: 'boolean',
    errorMessage: 'string',
    hideErrorMessage: 'boolean',
    allowTrim: 'boolean',
    autofocus: 'boolean',
    autocapitalize: 'boolean',
    preventInvalidInput: 'boolean',
    size: 'number',
    type: 'string',
    asNavElement: 'boolean',
  },
  onChange: 'function',
  onBlur: 'function',
});

customElements.define("ft-uic-input2", FtUicInput2WC);
