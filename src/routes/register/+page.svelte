<script lang="ts">
	import { enhance } from '$app/forms';
	import { CATEGORIES } from '$lib';
	import { ArrowClockwise, InfoCircle, Plus, Trash } from '$lib/assets/icons';
	import { gcash } from '$lib/assets/images';
	import { Confirmation } from '$lib/components';
	import type { Category, Limit } from '$lib/types';
	import { onMount } from 'svelte';

	type SubmitStatus = 'none' | 'pending' | 'success' | 'error';

	let testStatus: { form: SubmitStatus; email: SubmitStatus } = {
		form: 'none',
		email: 'none'
	};
	let participantLimit: Limit = {
		min: 1,
		max: 1
	};
	let isConsented: string;
	let autoSendEmail: boolean;
	let selectedCategory: string;
	let participants: { first_name: string; middle_name: string; last_name: string }[] = [
		{
			first_name: '',
			middle_name: '',
			last_name: ''
		}
	];

	function getParticipantLimit(category: string): void {
		const value = CATEGORIES.get(category);

		if (!value) {
			return;
		}

		participantLimit.min = value.limit.min;
		participantLimit.max = value.limit.max;
		participants = [
			{
				first_name: '',
				middle_name: '',
				last_name: ''
			}
		];

		for (let i = 0; i < value.limit.min - 1; i++) {
			participants.push({
				first_name: '',
				middle_name: '',
				last_name: ''
			});
		}
	}

	function addParticipant(): void {
		if (participants.length < participantLimit.max) {
			participants = [...participants, { first_name: '', middle_name: '', last_name: '' }];
		}
	}

	function removeParticipant(index: number): void {
		if (participants.length > participantLimit.min) {
			participants = participants.filter((_, i) => i !== index);
		}
	}

	let selectedImage: File;

	async function email(): Promise<void> {
		const imageArrayBuffer = await selectedImage.arrayBuffer();
		const formData = new FormData();

		console.log('Your image: ' + selectedImage.name);

		formData.append('file', new Blob([imageArrayBuffer]));
		// formData.append('school', );

		const response = await fetch('./api/email', {
			method: 'POST',
			body: formData,
			headers: {
				'Content-Type': 'application/octet-stream'
			}
		});

		if (response.status !== 200) {
			console.log('Email request status: ' + response.status);
			testStatus.email = 'error';
			throw new Error('Failed to send email.');
		}

		testStatus.email = 'success';
		console.log('Successfully sent email.');
	}

	function handleSelectedImage(e: Event): void {
		const target = e.target as HTMLInputElement;

		if (!target.files) return;

		selectedImage = target.files[0];
	}

	onMount(() => {
		const firstCategory: Category = CATEGORIES.values().next().value;
		const firstCategoryKey: string = CATEGORIES.keys().next().value;

		if (firstCategory && firstCategory.limit) {
			selectedCategory = firstCategoryKey;
			participantLimit.min = firstCategory.limit.min;
			participantLimit.max = firstCategory.limit.max;

			getParticipantLimit(firstCategoryKey);
		}
	});
</script>

<!-- Code is very bad, all made in a rush -->
<div class="px-padding py-10">
	<h1 class="font-gt-walsheim-pro-medium text-2xl lg:text-5xl text-center my-10">
		12th IT Skills Olympics Registration
	</h1>

	<!-- <form class="flex flex-col h-full" method="post" use:enhance> -->
	<div class="flex flex-col h-full w-full items-center">
		<div class="max-w-3xl space-y-5">
			{#if testStatus.form === 'success' && !autoSendEmail}
				<Confirmation />
			{:else if testStatus.form === 'success' && testStatus.email === 'success'}
				<Confirmation />
			{:else}
				<div
					class="backdrop-blur bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-lg shadow-glass"
				>
					<div class="p-4">
						<h2 class="font-gt-walsheim-pro-medium text-xl lg:text-2xl">Right to Privacy</h2>
					</div>
					<div class="text-sm lg:text-base">
						<p class="p-4">
							As provided by the Act, you may object to the processing of your personal data,
							request to access your personal information, and/or have it corrected, erased, or
							blocked on reasonable grounds. For the details of your rights as a data subject, you
							can get in touch with our Data Protection Officer at
							<span class="font-gt-walsheim-pro-medium text-amber-400"> dprms@umak.edu.ph </span>
							or at National Privacy Commission at
							<a
								href="https://privacy.gov.ph"
								class="font-gt-walsheim-pro-medium text-amber-400"
								rel="noreferrer"
								target="_blank"
							>
								https://privacy.gov.ph/
							</a>
							. For corrections or changes in the information you will submit, please contact
							<span class="font-gt-walsheim-pro-medium text-amber-400">
								itolympics.secretariat@gmail.com
							</span>
							. UMak-DPRMS & UMak-CCIS will consider your request and reserve the right to deal with
							the matter in accordance with the law
						</p>

						<div class="p-4 space-y-4">
							<label class="flex gap-4 items-center">
								<input type="radio" name="consent" value="yes" bind:group={isConsented} />
								<p>
									Yes, I give my consent to UMak-CCIS to gather and process my personal information
									and document for this event.
								</p>
							</label>

							<label class="flex gap-4 items-center">
								<input type="radio" name="consent" value="no" bind:group={isConsented} />
								<p>
									No, I do not give my consent for UMak-CCIS to gather and process my personal
									information and documents for this event.
								</p>
							</label>
						</div>
					</div>
				</div>

				{#if isConsented === 'yes'}
					<div
						class="backdrop-blur bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-lg shadow-glass"
					>
						<div class="p-4">
							<h2 class="font-gt-walsheim-pro-medium text-xl lg:text-2xl">
								Registration Mechanics
							</h2>
						</div>
						<div class="p-4 text-sm lg:text-base">
							<ol class="list-decimal pl-5 space-y-2 mb-4">
								<li>
									<p>
										A
										<span class="text-amber-400 uppercase font-gt-walsheim-pro-medium"
											>bona fide</span
										>
										student currently enrolled in the College or University he/she represents.
									</p>
								</li>
								<li>
									<p>
										Every participant MUST have an assigned COACH to completely represent the
										school.
									</p>
								</li>
								<li>
									<p>
										ONE participant for each event shall be allowed except Android Application
										Competition.
									</p>
								</li>

								<li>
									<p>
										The
										<span class="uppercase text-amber-400 font-gt-walsheim-pro-medium"
											>registration fee</span
										>
										is
										<span class="text-amber-400 font-gt-walsheim-pro-medium">Php 200.00</span>
										for each participant.
									</p>
								</li>

								<li>
									<p>Here are the steps sir on how to pay thru our gcash account biller:</p>
								</li>
							</ol>
							<img src={gcash} class="object-cover rounded-md" alt="gcash payment instructions" />
							<p class="mt-2">
								Choose
								<span class="uppercase text-amber-400 font-gt-walsheim-pro-medium">
									management fee services
								</span>
								on Payment Types
							</p>
						</div>
					</div>

					<form
						method="post"
						enctype="multipart/form-data"
						use:enhance={async ({ formData }) => {
							try {
								// submitStatus = 'pending';
								testStatus.form = 'pending';
								console.log(testStatus);

								if (autoSendEmail) {
									testStatus.email = 'pending';

									const imageArrayBuffer = await selectedImage.arrayBuffer();
									formData.append('file', new Blob([imageArrayBuffer]));
								}

								// email();

								return async ({ result }) => {
									if (result.type === 'success') {
										testStatus.form = 'success';
										testStatus.email = 'success';

										// submitStatus = 'success';

										console.log('Successfully registered.');
									} else if (result.type === 'error' || result.type === 'failure') {
										// submitStatus = 'error';

										testStatus.form = 'error';

										console.error('Failed to submit registration form.');

										throw new Error('Failed to submit registration form.');
									} else {
										// submitStatus = 'none';
										testStatus.form = 'none';
										testStatus.email = 'none';

										throw new Error('Something unexpected happened.');
									}
								};
							} catch (err) {
								testStatus.form = 'error';
								testStatus.email = 'error';
								// submitStatus = 'error';
								console.error('Failed to register: ' + err);
							}
						}}
					>
						<div
							class="flex flex-col p-4 gap-4 backdrop-blur bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-lg shadow-glass text-sm lg:text-base"
						>
							<label class="flex flex-col gap-1">
								<span class="font-gt-walsheim-pro-medium">Category</span>
								<select
									class="rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
									name="category"
									bind:value={selectedCategory}
									on:change={() => getParticipantLimit(selectedCategory)}
								>
									{#each CATEGORIES as [key, value] (key)}
										<option class="text-black" value={key}>{value.name}</option>
									{/each}
								</select>
							</label>

							<label class="flex flex-col gap-1">
								<div class="font-gt-walsheim-pro-medium flex gap-2 items-center">
									<span class="font-gt-walsheim-pro-medium">Participant Name/s</span>
									<div
										class="py-0.5 px-1 rounded-md backdrop-blur bg-[rgba(255,0,0,0.3)] border-[1px] border-[rgba(255,0,0,0.4)] text-xs lg:text-sm shadow-glass-input"
									>
										Min: {participantLimit.min}
									</div>
									<div
										class="py-0.5 px-1 rounded-md backdrop-blur bg-[rgba(255,0,0,0.3)] border-[1px] border-[rgba(255,0,0,0.4)] text-xs lg:text-sm shadow-glass-input"
									>
										Max: {participantLimit.max}
									</div>
								</div>

								<div class="flex flex-col gap-2 mb-2">
									{#each participants as participant, idx (idx)}
										<div class="flex gap-1 lg:gap-2">
											<div class="flex gap-1 lg:gap-2 w-full">
												<input
													bind:value={participant.first_name}
													class="w-full rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
													name={`first_name_${idx}`}
													type="text"
													placeholder="First"
													required
												/>
												<input
													bind:value={participant.middle_name}
													class="w-full rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
													name={`middle_name_${idx}`}
													type="text"
													placeholder="Middle"
												/>
												<input
													bind:value={participant.last_name}
													class="w-full rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
													name={`last_name_${idx}`}
													type="text"
													placeholder="Last"
													required
												/>
											</div>
											{#if participantLimit.min !== participantLimit.max}
												<button
													class={`p-2 bg-red-500 flex justify-center items-center rounded-full w-10 h-10 backdrop-blur bg-[rgba(255,0,0,0.4)] border-[1px] border-[rgba(255,0,0,0.5)] hover:scale-105 transition-[transform,opacity] duration-300 shadow-glass-input ${
														participants.length > participantLimit.min
															? 'opacity-100'
															: 'opacity-50 hover:scale-100'
													}`}
													type="button"
													on:click={() => removeParticipant(idx)}
												>
													<Trash styles="w-5 h-5" />
												</button>
											{/if}
										</div>
									{/each}
								</div>

								{#if participantLimit.min !== participantLimit.max}
									<div class="flex w-full justify-end">
										<button
											class={`px-4 py-2 flex items-center gap-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.4)] border-[1px] border-[rgba(255,255,255,0.5)] hover:scale-105 transition-[opacity,transform] duration-300 ${
												participants.length >= participantLimit.max
													? 'opacity-50 hover:scale-100'
													: 'opacity-100'
											}`}
											type="button"
											on:click={addParticipant}
											disabled={participants.length === participantLimit.max}
										>
											<Plus styles="w-6 h-6" />
											<span>Add Participant</span>
										</button>
									</div>
								{/if}
							</label>

							<label class="flex flex-col gap-1">
								<span class="font-gt-walsheim-pro-medium">School</span>
								<!-- <Input name="school" placeholder="e.g. University of Makati - Makati" /> -->
								<input
									class="rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
									name="school"
									type="text"
									placeholder="e.g. University of Makati - Makati"
									required
								/>
							</label>

							<label class="flex flex-col gap-1">
								<span class="font-gt-walsheim-pro-medium">Coach</span>
								<div class="flex flex-col gap-2">
									<input
										class="rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
										name="coach_name"
										type="text"
										placeholder="Name (e.g. Last, First)"
										required
									/>
									<input
										class="rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
										name="coach_email"
										type="email"
										placeholder="Email"
										required
									/>
									<input
										class="rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
										name="coach_contact_number"
										type="tel"
										placeholder="Contact # (e.g. 09123456789)"
										required
									/>
								</div>
							</label>

							<div class="flex flex-col gap-1">
								<span class="font-gt-walsheim-pro-medium">Payment Receipt</span>
								<!-- <div class="flex flex-col gap-1"> -->
								<!-- 	<span class="font-gt-walsheim-pro-medium">Payment Receipt</span> -->
								<!-- <p class="flex gap-1 items-center text-xs lg:text-sm opacity-75"> -->
								<!-- 	<InfoCircle styles="w-3 h-3 text-amber-400" /> -->
								<!-- 	You can choose to send the email to -->
								<!-- 	<span class="text-amber-400 font-gt-walsheim-pro-medium"> -->
								<!-- 		itolympics.secretariat@gmail.com -->
								<!-- 	</span> -->
								<!-- 	or send it automatically -->
								<!-- </p> -->
								<!-- </div> -->

								<div class="flex flex-col gap-4">
									<label class="flex items-center gap-4">
										<input type="radio" name="consent" value={false} bind:group={autoSendEmail} />
										<p>
											Manually send receipt to
											<span class="text-amber-400 font-gt-walsheim-pro-medium">
												itolympics.secretariat@gmail.com
											</span>
											via Gmail (recommended)
										</p>
									</label>

									<label class="flex items-center gap-4">
										<input type="radio" name="consent" value={true} bind:group={autoSendEmail} />
										<p>Automatically send receipt after submission (experimental)</p>
									</label>

									<label
										class={`flex flex-col gap-1 transition-opacity duration-300 ${
											autoSendEmail ? 'opacity-100' : 'opacity-50'
										}`}
									>
										<input
											class="rounded-md bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.15)] shadow-glass-input"
											type="file"
											name="file"
											accept="image/*"
											on:change={handleSelectedImage}
											required={autoSendEmail}
											disabled={!autoSendEmail}
										/>
										<p class="text-amber-400 flex gap-1 items-center text-xs lg:text-sm opacity-75">
											<InfoCircle styles="w-3 h-3" />
											<span class="text-white">Recommended file types:</span>
											.png, .jpg
										</p>
									</label>
								</div>
							</div>

							<input type="number" name="participants_length" value={participants.length} hidden />
							<input
								type="text"
								name="send_email"
								value={autoSendEmail ? 'true' : 'false'}
								hidden
							/>

							<div class="flex w-full justify-end items-center gap-4">
								{#if testStatus.form === 'pending' || testStatus.email === 'pending'}
									{#if testStatus.form === 'pending'}
										<span class="text-base">Submitting registration...</span>
									{:else if testStatus.form === 'error'}
										<span class="text-base text-red-500 font-gt-walsheim-pro-medium"
											>Registration error</span
										>
									{/if}

									{#if testStatus.email === 'pending'}
										<span class="text-base">Sending receipt...</span>
									{:else if testStatus.email === 'error'}
										<span class="text-base text-red-500 font-gt-walsheim-pro-medium"
											>Email error</span
										>
									{/if}

									<ArrowClockwise styles="w-6 h-6 animate-spin" />
								{/if}

								<button
									class="flex bg-white text-black justify-center w-fit px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-glass-input"
									type="submit">Submit</button
								>
							</div>
						</div>
					</form>
				{/if}
			{/if}
		</div>
	</div>
	<!-- </form> -->
</div>
