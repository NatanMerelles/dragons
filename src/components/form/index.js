import styled from 'styled-components';
import { Button } from './button';
import { Input } from './input';

const Label = styled.label`
	font-weight: 600;
	margin-bottom: 0.6rem;
`;

const Row = styled.div`
	width: 100%;

	margin-bottom: 46px;

	:last-child{
		margin: 0;
	}
`;

const Form = styled.form``;

Object.assign(Form, { Row, Button, Input, Label });

export { Form, Input, Button }