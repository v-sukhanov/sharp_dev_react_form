import { MainContainer } from './components/MainContainer';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import * as yup from "yup";
import React from 'react';
import { PrimaryButton } from './components/PrimaryButton';
import { Form } from './components/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Input } from './components/Input';
import parsePhoneNumberFromString from 'libphonenumber-js';

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email should have correct format")
		.required("Email is a required field"),
});

const normalizePhoneNumber = (value: string) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if(!phoneNumber){
		return value
	}

	return (
		phoneNumber.formatInternational()
	);
};

export const Step2 = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});
	const hasPhone = watch("hasPhone");

	const onSubmit = (data: any) => {
		navigate("/step3");
	};

	return <MainContainer>
		<Typography component="h2">
			Step 2
		</Typography>
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register("email", {required: true})}
				id="email"
				type="email"
				label="Email"
				name="email"
				error={!!errors.email}
				helperText={errors?.email?.message}
			/>

			<FormControlLabel
				control={
					<Checkbox color="primary" {...register} name="hasPhone" />
				}
				label="Do you have a phone"
			/>

			{hasPhone && (
				<Input
					{...register("phoneNumber")}
					id="phoneNumber"
					type="tel"
					label="Phone Number"
					name="phoneNumber"
					onChange={(event: { target: { value: string; }; }) => {
						event.target.value = normalizePhoneNumber(event.target.value);
					}}
				/>
			)}
			<PrimaryButton>Next</PrimaryButton>
		</Form>
	</MainContainer>
}