import { FormEvent, FormEventHandler, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(1)
	}
}))

export const Form = ({children, onSubmit}: {children: ReactNode, onSubmit: () => void}) => {
	const styles = useStyles();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit()
	}
	return <form className={styles.root} noValidate onSubmit={handleSubmit}>
		{children}
	</form>
}