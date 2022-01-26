import styled from 'styled-components';
import { Button } from './button';
import { Input } from './input';

const Row = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	margin-bottom: 46px;

	:last-child{
		margin: 0;
	}
`;

const Form = styled.form``;

Object.assign(Form, { Row, Button, Input });

export { Form, Input, Button }