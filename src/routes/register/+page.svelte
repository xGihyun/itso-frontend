<h1>Register</h1>

<form class="flex flex-col h-full" method="post">
	<label>
		Name
		<input name="first_name" type="text" placeholder="First" />
		<input name="middle_name" type="text" placeholder="Middle" />
		<input name="last_name" type="text" placeholder="Last" />
	</label>

	<label>
		School
		<input name="school" type="text" placeholder="e.g. University of Makati" />
	</label>

	<label>
		Coach Name
		<input name="coach_name" type="text" placeholder="Last, First" />
	</label>

	<label>
		Category
		<select name="category">
			<option>Category 1</option>
			<option>Category 2</option>
			<option>Category 3</option>
		</select>
	</label>

	<button type="submit">Submit</button>
</form>
