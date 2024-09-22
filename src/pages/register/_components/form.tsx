import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RegisterSchema,
  type FullNameInput,
  type RegisterInput,
} from "../schema";
import { toast } from "sonner";
import type { CategoryResult } from "../types";
import { useEffect, useState } from "react";
import { actions } from "astro:actions";

const DEFAULT_FULL_NAME: FullNameInput = {
  lastName: "",
  firstName: "",
  middleName: "",
};

type Props = {
  categories: CategoryResult[];
};

export function RegisterForm(props: Props): JSX.Element {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      students: [DEFAULT_FULL_NAME],
      school: { campus: "", name: "" },
      coach: {
        ...DEFAULT_FULL_NAME,
        contactNumber: "",
        email: "",
      },
    },
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "students",
  });

  const studentsLength = form.watch("students").length;
  const selectedCategoryId = form.watch("categoryId");
  const [category, setCategory] = useState<CategoryResult | undefined>();

  function setSelectedCategory(categoryId: string): void {
    const selectedCategory = props.categories.find(
      (category) => category.id === categoryId,
    );

    setCategory(selectedCategory);

    if (!selectedCategory) {
      console.error("No selected category.");
      return;
    }

    form.setValue(
      "students",
      Array.from(
        { length: selectedCategory.minimumParticipantLimit },
        () => DEFAULT_FULL_NAME,
      ),
    );
  }

  useEffect(() => {
    setSelectedCategory(selectedCategoryId);
  }, [selectedCategoryId]);

  function isStudentCountOutOfBounds(): boolean {
    if (!category) {
      return true;
    }

    return (
      studentsLength < category.minimumParticipantLimit ||
      studentsLength >= category.maximumParticipantLimit
    );
  }

  async function onSubmit(values: RegisterInput): Promise<void> {
    let toastId = toast.loading("Submitting");

    const { error } = await actions.register(values);

    if (error) {
      console.error(error.message);
      toast.error(error.message, { id: toastId });
      return;
    }

    toast.success("Successfully registered!", { id: toastId });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {props.categories.map((category) => (
                    <SelectItem value={category.id} key={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <h2 className="text-xl">School</h2>

        <FormField
          control={form.control}
          name="school.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="University of Makati" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="school.campus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Campus</FormLabel>
              <FormControl>
                <Input placeholder="Makati" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h2 className="text-xl">Students</h2>

        {fieldArray.fields.map((field, i) => (
          <div key={field.id} className="flex gap-2">
            <FormField
              control={form.control}
              name={`students.${i}.firstName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`students.${i}.middleName`}
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
              name={`students.${i}.lastName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <Button
          onClick={() => fieldArray.append(DEFAULT_FULL_NAME)}
          type="button"
          disabled={isStudentCountOutOfBounds()}
        >
          Add Student
        </Button>

        <h2 className="text-xl">Coach</h2>

        <FormField
          control={form.control}
          name="coach.firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coach.middleName"
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
          name="coach.lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coach.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coach.contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
