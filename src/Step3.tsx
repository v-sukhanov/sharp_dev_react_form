import { MainContainer } from './components/MainContainer';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Form } from './components/Form';
import { FileInput } from './components/FileInput';
import { useForm } from 'react-hook-form';


export const Step3 = () => {
	const { control, handleSubmit } = useForm();
	return <MainContainer>
		<Typography component="h2">
			Step 3
		</Typography>
		<Form onSubmit={() => null}>
			<FileInput name="files" control={control}></FileInput>
		</Form>
	</MainContainer>
}