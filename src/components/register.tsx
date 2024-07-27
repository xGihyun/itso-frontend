import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	registerSchema,
	type FullNameSchema,
	type RegisterSchema,
} from "@/schemas";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { actions } from "astro:actions";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const DEFAULT_FULL_NAME: FullNameSchema = {
	first_name: "",
	middle_name: "",
	last_name: "",
};

export default function Register(): JSX.Element {
	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			// TODO:
			// The default number of students should be the minimum
			// amount of participants required for the selected category
			students: [DEFAULT_FULL_NAME],
			coach: { ...DEFAULT_FULL_NAME, email: "", contact_number: "" },
			school_name: "",
		},
	});

	// NOTE:
	// We use an array of fields since each category has a specific limit
	// to the number of participants
	const { fields, append, remove } = useFieldArray({
		name: "students",
		control: form.control,
	});

	async function onSubmit(values: RegisterSchema) {
		const toastId = toast.loading("Submitting...");
		console.log("Values:", values);

		const { data, error } = await actions.register.safe(values);

		if (error) {
			toast.error(error.message, {
				id: toastId,
				duration: Number.POSITIVE_INFINITY,
			});
			return;
		}

		toast.success("Success", { id: toastId });

		console.log("Data:", data);
		console.log("Error:", error);
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<h3 className=" text-2xl font-bold">Competition Details</h3>

					<FormField
						control={form.control}
						name="category_id"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category*</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{/* TODO: Get the list of categories on the database */}

										<SelectItem value="it-quiz-bee">IT Quiz Bee</SelectItem>
										<SelectItem value="web-design">Web Design</SelectItem>
										<SelectItem value="e-sports">E-Sports</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="school_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>School Name*</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="e.g. University of Philippines - Diliman"
										required
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<h3 className=" text-2xl font-bold">Coach</h3>

					<div className="flex gap-2">
						<FormField
							control={form.control}
							name="coach.first_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name*</FormLabel>
									<FormControl>
										<Input placeholder="John" {...field} required />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="coach.middle_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Middle Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="coach.last_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name*</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Smith" required />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="coach.email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email*</FormLabel>
								<FormControl>
									<Input
										placeholder="coach@gmail.com"
										type="email"
										{...field}
										required
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="coach.contact_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contact Number*</FormLabel>
								<FormControl>
									<Input {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<h3 className=" text-2xl font-bold">Students</h3>
					{fields.map((field, idx) => {
						return (
							<div className="flex gap-2 items-end" key={field.id}>
								<FormField
									control={form.control}
									name={`students.${idx}.first_name`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name*</FormLabel>
											<FormControl>
												<Input placeholder="John" {...field} required />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name={`students.${idx}.middle_name`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Middle Name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name={`students.${idx}.last_name`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name*</FormLabel>
											<FormControl>
												<Input placeholder="Doe" {...field} required />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									size="icon"
									variant="destructive"
									type="button"
									onClick={() => remove(idx)}
									disabled={fields.length < 2}
								>
									X
								</Button>
							</div>
						);
					})}

					<Button type="button" onClick={() => append(DEFAULT_FULL_NAME)}>
						+ Add Student
					</Button>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
