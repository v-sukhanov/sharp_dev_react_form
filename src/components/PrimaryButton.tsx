import { ReactNode } from 'react';
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2)
	}
}))

export const PrimaryButton = ({children}: {children: ReactNode}) => {
	const styles = useStyles()

	return <Button
		className={styles.root}
		type={'submit'}
		fullWidth
		variant={'contained'}
		color={'primary'}

	>
		{children}
	</Button>
}