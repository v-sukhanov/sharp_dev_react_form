import { MainContainer } from './components/MainContainer';
import { Typography } from '@material-ui/core';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from './components/PrimaryButton';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, "First name should not contain numbers")
		.required("First name is a required field"),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, "Last name should not contain numbers")
		.required("Last name is a required field"),
})

export const Step1 = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema)
	});

	const onSubmitHandler = (data: any) => {
		navigate({
			pathname: '/step2'
		})
		console.log(data)
	}
	return <MainContainer>
		<Typography component="h2">
			Step 1
		</Typography>
		<Form onSubmit={handleSubmit(onSubmitHandler)}>
			<Input {...register('firstName', { required: true })} helperText={errors?.firstName?.message} error={!!errors.firstName} id="firstName" type="text" label="First Name" name="firstName"/>
			<Input {...register('lastName', { required: true })} helperText={errors?.lastName?.message} error={!!errors.lastName} id="lastName" type="text" label="Last Name" name="lastName"/>
			<PrimaryButton>Next</PrimaryButton>
		</Form>
	</MainContainer>
}