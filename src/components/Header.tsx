import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2),
		textAlign: 'center',
		fontSize: '40px',
		color: 'deeppink'
	}
}))

export const Header = () => {
	const styles = useStyles()

	return <Typography className={styles.root} component="h1" variant="h5">
		Form
	</Typography>
}