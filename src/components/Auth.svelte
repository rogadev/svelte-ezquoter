<script>
	import { supabase } from '../supabase/client.js';

	let isSignUp;
	let email;
	let password;
	let confirm;
	let errorMessage;
	let signupSuccess;
	let loading = false;

	const toggleSignUp = () => {
		isSignUp = !isSignUp;
		password = '';
		confirm = '';
		errorMessage = '';
	};

	const formHandler = async () => {
		errorMessage = '';
		if (isSignUp) {
			await handleSignup();
		} else {
			await handleSignin();
		}
	};

	const handleSignup = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signUp({
				email: email,
				password: password
			});
			if (error) throw error;
			else {
				signupSuccess = true;
			}
		} catch (error) {
			signupSuccess = false;
			displayError(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};

	const handleSignin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({
				email: email,
				password: password
			});
			if (error) throw error;
		} catch (error) {
			displayError(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};

	const displayError = (message) => {
		errorMessage = message;
	};
</script>

<div class="w-full max-w-xs mx-auto pt-20">
	{#if signupSuccess}
		<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<h1 class="text-xl bold">Thank you!</h1>
			<p>You have successfully signed up. Please check your email to verify your account.</p>
		</div>
	{:else if loading}
		<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<div class="text-center">
				<div class="spinner" />
				<p>loading...</p>
			</div>
		</div>
	{:else}
		<form
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			on:submit|preventDefault={formHandler}
		>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
				<input
					bind:value={email}
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 focus:shadow-blue-300"
					id="email"
					type="text"
					placeholder="Email Address"
				/>
			</div>

			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
				<input
					bind:value={password}
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 focus:shadow-blue-300"
					id="password"
					type="password"
					placeholder="Password"
				/>
			</div>

			{#if isSignUp}
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="confirm"
						>Confirm Password</label
					>
					<input
						bind:value={confirm}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 focus:shadow-blue-300"
						id="confirm-password"
						type="password"
						placeholder="Confirm Password"
					/>
				</div>
			{/if}

			{#if errorMessage}
				<div class="text-sm mb-2 font-bold text-red-500">{errorMessage}</div>
			{/if}

			<div class="pt-2 flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button
				>
				<a
					class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					href="#">Forgot Password?</a
				>
			</div>

			<div class="mt-6">
				<p class="flex justify-between">
					{isSignUp ? 'Already have an account?' : "Don't have an account?"}
					<button
						type="button"
						on:click={toggleSignUp}
						class="text-blue-500 font-bold hover:text-blue-800"
						>{isSignUp ? 'Sign In' : 'Sign Up'}</button
					>
				</p>
			</div>
		</form>
	{/if}
	<p class="text-center text-gray-500 text-xs">&copy;2022 Roga Dev. All rights reserved.</p>
</div>
