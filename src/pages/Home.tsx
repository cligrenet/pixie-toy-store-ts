export const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<div
				className="text-center p-5 front text-black text-bg-light opacity-75 rounded-3"
				style={{ position: 'absolute', zIndex: '100' }}
			>
				<h1 className="pt-3">Pixie Toy</h1>
			</div>

			<div
				className="container-fluid rounded-3"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',

					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					filter: 'blur(2px)',
					height: '100vh',
				}}
			></div>
		</div>
	);
};
