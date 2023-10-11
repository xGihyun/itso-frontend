<script lang="ts">
	import { enhance } from '$app/forms';
	import { CATEGORIES } from '$lib';

	let participantLimit: number;
	let isConsented: string;
	let selectedCategory: string;

	function getParticipantLimit(category: string): void {
		const value = CATEGORIES.get(category);

		if (!value) {
			return;
		}

		participantLimit = value.limit;
	}
</script>

<!-- <h1>Register</h1> -->

<div class="px-padding py-10">
	<h1 class="font-gt-walsheim-pro-medium text-2xl lg:text-5xl text-center my-10">
		12th IT Skills Olympics Registration
	</h1>

	<!-- <div class="flex w-full justify-center"> -->
	<!-- 	<div class="h-40 w-full max-w-3xl"> -->
	<!-- 		<img src={itsoBannerFull} class=" h-full rounded-lg" alt="IT Skills Olympics" /> -->
	<!-- 	</div> -->
	<!-- </div> -->
	<form class="flex flex-col h-full" method="post" use:enhance>
		<div class="flex flex-col h-full w-full items-center">
			<div class="max-w-3xl space-y-5">
				<div
					class="backdrop-blur bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-lg"
				>
					<div class="p-4">
						<h2 class="font-gt-walsheim-pro-medium text-2xl">Right to Privacy</h2>
					</div>
					<div>
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
							<label class="flex gap-4">
								<input type="radio" name="consent" value="yes" bind:group={isConsented} />
								<p>
									Yes, I give my consent to UMak-CCIS to gather and process my personal information
									and document for this event.
								</p>
							</label>

							<label class="flex gap-4">
								<input type="radio" name="consent" value="no" bind:group={isConsented} />
								<p>
									No, I do not give my consent for UMak-CCIS to gather and process my personal
									information and documents for this event.
								</p>
							</label>
						</div>
					</div>
				</div>

				<!-- <div> -->
				<!-- 	<!-- <div class="py-4"> -->
				<!-- 	<!-- 	<span class="font-gt-walsheim-pro-medium">Consent</span> -->
				<!-- 	<!-- </div> -->
				<!-- 	<div class="p-4 space-y-4"> -->
				<!-- 		<label class="flex gap-4"> -->
				<!-- 			<input type="radio" name="consent" value="yes" bind:group={isConsented} /> -->
				<!-- 			<p> -->
				<!-- 				Yes, I give my consent to UMak-CCIS to gather and process my personal information and -->
				<!-- 				document for this event. -->
				<!-- 			</p> -->
				<!-- 		</label> -->
				<!---->
				<!-- 		<label class="flex gap-4"> -->
				<!-- 			<input type="radio" name="consent" value="no" bind:group={isConsented} /> -->
				<!-- 			<p> -->
				<!-- 				No, I do not give my consent for UMak-CCIS to gather and process my personal -->
				<!-- 				information and documents for this event. -->
				<!-- 			</p> -->
				<!-- 		</label> -->
				<!-- 	</div> -->
				<!-- </div> -->

				{#if isConsented === 'yes'}
					<div
						class="backdrop-blur bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-lg"
					>
						<div class="p-4">
							<h2 class="font-gt-walsheim-pro-medium text-2xl">Registration of the Mechanics</h2>
						</div>
						<div class="p-4">
							<ol class="list-decimal pl-5 space-y-2">
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
									<p class="mb-1">
										Registration fee must be sent thru GCASH with the following details:
									</p>
									<p>
										GCash number:
										<span class="text-amber-400 font-gt-walsheim-pro-medium">0920-9723134</span>
									</p>

									<p>
										GCash name:
										<span class="text-amber-400 font-gt-walsheim-pro-medium">Jernell Sanchez</span>
									</p>
								</li>
							</ol>
						</div>
					</div>

					<div
						class="flex flex-col p-4 gap-4 backdrop-blur bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-lg"
					>
						<label class="flex flex-col">
							<span class="font-gt-walsheim-pro-medium">Category</span>
							<select
								class="p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
								name="category"
								bind:value={selectedCategory}
								on:change={() => getParticipantLimit(selectedCategory)}
							>
								{#each CATEGORIES as [key, value] (key)}
									<option class="text-black" value={key}>{value.name}</option>
								{/each}
							</select>
						</label>

						<label class="flex flex-col">
							<span class="font-gt-walsheim-pro-medium">Participant Name/s</span>
							<div class="flex flex-col gap-2">
								{#each Array(participantLimit) as _, idx (idx)}
									<div class="flex gap-4">
										<input
											class="w-full p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
											name={`first_name_${idx}`}
											type="text"
											placeholder="First"
											required
										/>
										<input
											class="w-full p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
											name={`middle_name_${idx}`}
											type="text"
											placeholder="Middle"
										/>
										<input
											class="w-full p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
											name={`last_name_${idx}`}
											type="text"
											placeholder="Last"
											required
										/>
									</div>
								{/each}
							</div>
						</label>

						<label class="flex flex-col">
							<span class="font-gt-walsheim-pro-medium">School</span>
							<input
								class="p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
								name="school"
								type="text"
								placeholder="e.g. University of Makati"
								required
							/>
						</label>

						<label class="flex flex-col">
							<span class="font-gt-walsheim-pro-medium">Coach</span>
							<div class="flex flex-col gap-2">
								<input
									class="p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
									name="coach_name"
									type="text"
									placeholder="Name (e.g. Last, First)"
									required
								/>
								<input
									class="p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
									name="coach_email"
									type="email"
									placeholder="Email"
									required
								/>
								<input
									class="p-2 rounded-full backdrop-blur bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255,255,255,0.3)]"
									name="coach_contact_number"
									type="tel"
									placeholder="Contact # (e.g. 09123456789)"
									required
								/>
							</div>
						</label>

						<input type="number" name="participant_limit" value={participantLimit} hidden />

						<button
							class="flex bg-white text-black justify-center w-fit px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
							type="submit">Submit</button
						>
					</div>
				{/if}
			</div>
		</div>
	</form>
</div>
