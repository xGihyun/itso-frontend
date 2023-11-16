<script>
	import {
		androidFinanceImg,
		androidGameImg,
		androidIotImg,
		androidProductivity,
		ccisLogo,
		ccisRecogCert,
		chedLogo,
		compNetImg,
		cyberSecImg,
		digiElecImg,
		esportImg,
		itQuizImg,
		itsoBannerFull,
		itsoLogo,
		itsoLogoName,
		javaCodeImg,
		netProgImg,
		pcDisImg,
		softDevImg,
		webDevImg,
		wuriLogo,
		itsoCert
	} from '$lib/assets/images';
	import Footer from '$lib/components/Footer.svelte';

	// let innerWidth = 0;
	// let innerHeight = 0;
</script>

<!-- <svelte:window bind:innerWidth bind:innerHeight /> -->

<div
	class="border-image-slice border-gradient h-40 md:h-56 lg:h-72 border-b-8 z-20 block lg:hidden"
>
	<img src={itsoBannerFull} alt="IT Skills Olympics" class="object-cover w-full h-full" />
</div>
<div class="px-padding py-10 max-w-5xl mx-auto">
	<div class="flex justify-center p-4">
		<img src={itsoLogoName} alt="ITSO Logo" class="hidden md:block md:w-full md:h-full" />
	</div>
	<p class="text-justify">
		<strong>IT Skills Olympics</strong> is an annual event of the
		<strong>University of Makati's College of Computing and Information Sciences</strong>. This
		event celebrates the best and brightest young minds in the field of information technology. This
		prestigious competition is open to students from all over the country, and features a variety of
		challenging tasks in areas such as programming, cybersecurity, web page design, and more. This
		year's competition is expected to be even more competitive than ever before, with new challenges
		and a greater focus on real-world problem solving. The IT Olympics is a great way to celebrate
		the achievements of excellent IT students and to inspire the next generation of innovators.
	</p>

	<div class="flex justify-center align-middle p-5">
		<span class="text-3xl font-bold">IT Skills Olympics Categories</span>
	</div>

	<p class="text-center pb-5">
		Get ready to unleash your inner IT Skills as the College has organized the following categories
	</p>

	<div class="grid grid-rows-1 lg:grid-cols-2 lg:grid-flow-row gap-4">
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/JAVA-PROGRAMMING.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Java Programming</span
			>
			<img
				src={javaCodeImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/ITSO-Web-Design-15.11.2023.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Webpage Design</span
			>
			<img
				src={webDevImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/PC-DISASSEMBLY_ASSEMBLY.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>PC Assembly / Disassembly</span
			>
			<img
				src={pcDisImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/NET-PROGRAMMING.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>.NET Programming</span
			>
			<img
				src={netProgImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/DIGITAL-ELECTRONICS.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Digital Electronics</span
			>
			<img
				src={digiElecImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/CYBERSECURITY.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Cybersecurity</span
			>
			<img
				src={cyberSecImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
			on:click={() => window.open('/docx/ANDROID-APPS.pdf', '_blank')}
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Android App Dev't (Productivity)</span
			>
			<img
				src={androidProductivity}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			on:click={() => window.open('/docx/ANDROID-APPS.pdf', '_blank')}
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Android App Dev't (Microfinance)</span
			>
			<img
				src={androidFinanceImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			on:click={() => window.open('/docx/ANDROID-APPS.pdf', '_blank')}
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Android App Dev't (IoT)</span
			>
			<img
				src={androidIotImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			on:click={() => window.open('/docx/ANDROID-APPS.pdf', '_blank')}
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Android App Dev't (Game Dev't)</span
			>
			<img
				src={androidGameImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			on:click={() => window.open('/docx/QUIZ-BEE.pdf', '_blank')}
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20">IT Quiz Bee</span>
			<img
				src={itQuizImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			on:click={() => window.open('/docx/COMPUTER-NETWORKING.pdf', '_blank')}
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden"
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20"
				>Computer Networking</span
			>
			<img
				src={compNetImg}
				class="absolute z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
		<div
			on:click={() => window.open('/docx/E-GAMES.pdf', '_blank')}
			class="group transition-all border-[#202663] h-20 bg-[#111961] drop-shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden object-contain col-span-2"
		>
			<span class="text-center transition-all group-hover:font-bold text-xl z-20">E-games</span>
			<img
				src={esportImg}
				class="absolute w-full h-full object-cover z-10 transition-all brightness-50 group-hover:brightness-75"
				alt=""
				srcset=""
			/>
		</div>
	</div>

	<div class="flex flex-col w-full">
		<div class="flex flex-col lg:flex-row w-full gap-7 justify-center items-center py-5">
			<img src={ccisLogo} class="w-28" />
			<div class="flex flex-col justify-center items-center lg:items-start">
				<span class="text-lg">About the</span>
				<span class="text-2xl font-bold text-center lg:text-start"
					>College of Computing and Information Sciences</span
				>
			</div>
		</div>

		<p class="text-justify">
			The College of Computing and Information Sciences (CCIS) is the leading college in ICT
			education programs of the university by providing competitive, relevant and functional IT
			Curriculum responsive to the needs of the industrial and business organizations. The college
			has of the following functions:
		</p>

		<ul class="list-disc ml-10 leading-8 py-5">
			<li>Develop, implement and revise IT Education Programs.</li>
			<li>
				Subject the IT Education Programs to government recognition and accreditation by authorized
				agencies.
			</li>
			<li>
				Provide creativity, production and development programs to faculty members and students.
			</li>
			<li>Engage in Information Technology / Computer Science research.</li>
			<li>
				Promote Information and Communications Technology literacy training through community
				extension services.
			</li>
			<li>Establish linkages and networking to the industry and other government agencies.</li>
			<li>Provide administrative services to the stakeholders.</li>
			<li>Engage in other relevant and sound curricular and extra-curricular endeavors.</li>
		</ul>

		<p class="text-justify">
			Furthermore, the <strong>College of Computing and Information Sciences</strong> has also been
			instrumental with the <strong>inclusion of the University of Makati</strong> in the
			<strong
				>2023 World University Rankings for Innovation (WURI) through the shortlist Innovative
				Program (Rank 50 - 100)</strong
			>.
		</p>

		<span class="text-2xl md:text-3xl pt-10 text-center font-gt-walsheim-pro-medium"
			>Recognitions of the University and College</span
		>

		<div class="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 py-5">
			<img src={chedLogo} class="w-28" alt="" srcset="" />
			<img src={wuriLogo} class="w-72" alt="" srcset="" />
		</div>

		<img class="py-5" src={itsoCert} alt="" srcset="" />
	</div>

	<Footer />
</div>
