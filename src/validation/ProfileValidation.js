import * as yup from "yup";

export const ResidancyInfoSchema = yup.object({
    ImmigrationStatus: yup.string().trim().required("ImmigrationStatus is required"),
    birthCounty: yup.string().trim().required("birthCounty is required"),
    residencyCounty: yup.string().trim().required("residencyCounty is required"),
    grownUpCountry: yup.string().trim().required("grownUpCountry is required")
})

export const BasicDetailsSchema = yup.object({
    firstName: yup.string().trim().required("firstName is required"),
    gender: yup.string().trim().required("gender is required"),
    lastName: yup.string().trim().required("lastName is required"),
    DOB: yup.string().trim().required("DOB is required").test("is-above-18", "Your age must be at least 18 old",
        (value) => {
            if (!value) return false;
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                return age - 1 >= 18;
            }
            return age >= 18;
        }
    ),
})

export const CareerInfoSchema = yup.object({
    previousJobs: yup.object({
        designation: yup.string().trim(),
        company: yup.string().trim(),
        start: yup
            .string()
            .trim()
            .test(
                "start-before-end",
                "Start date must be before the end date",
                function (value) {
                    const { end } = this.parent;
                    if (!value || !end) return true;
                    return new Date(value) <= new Date(end);
                }
            ),
        end: yup.string().trim(),
    }),
    currentJob: yup.object({
        designation: yup.string().trim().required("designationis required"),
        company: yup.string().trim().required("company is required"),
        start: yup
            .string()
            .trim()
            .required("Start date is required")
            .test(
                "is-before-today",
                "Date must be before today",
                (value) => {
                    return new Date(value) < new Date();
                }
            ),
        end: yup.string().trim().required("end is required"),
    }),
})

export const PhysicalattributeDetailsSchema = yup.object({
    weight: yup.string().trim().required("weight required"),
    skinComplexion: yup.string().trim().required("skinComplexion is required"),
    Height: yup.string().trim().required("Height is required"),
    Disablity: yup.string().trim().required("Disablity is required"),
    DisablityType: yup.string().trim(),
    BloodGroup: yup.string().trim().required("BloodGroup is required"),
})

export const EducationSchema = yup.object({
    Degree: yup.string().trim().required("Degree required"),
    insitution: yup.string().trim().required("insitution is required"),
    start: yup
        .string()
        .trim()
        .test(
            "start-before-end",
            "Start date must be before the end date",
            function (value) {
                const { end } = this.parent;
                if (!value || !end) return true;
                return new Date(value) <= new Date(end);
            }
        ),
    end: yup
        .string()
        .trim()
        .required("End date is required")
        .test(
            "end-after-start",
            "End date must be after the start date",
            function (value) {
                const { start } = this.parent;
                if (!value || !start) return true;
                return new Date(value) >= new Date(start);
            }
        ),

})

export const LanguageInfoSchema = yup.object({
    motherTounge: yup.string().trim().required("motherTounge is required"),
    knownLanguage: yup.string().trim().required("knownLanguage is required")
})

export const HobbiesAndInterestSchema = yup.object({
    Hobbies: yup.string().trim().required("Hobbies is required"),
    Intrest: yup.string().trim().required("Interest is required"),
    Music: yup.string().trim().required("Music is required"),
    Books: yup.string().trim().required("Books is required"),
    Movies: yup.string().trim().required("Movies is required"),
    tvShow: yup.string().trim().required("tvShow is required"),
    Sports: yup.string().trim().required("Sports is required"),
    fitnessActivities: yup.string().trim().required("fitnessActivities is required"),
    cuisines: yup.string().trim().required("cuisines is required"),
    dressStyle: yup.string().trim().required("dressStyle is required"),
})

export const PersonalAttitudeSchema = yup.object({
    Affection: yup.string().trim().required("Affection is required"),
    religionService: yup.string().trim().required("religionService is required")
})

export const BackgroundInfoSchema = yup.object({
    Religion: yup.string().trim().required("Religion is required"),
    Caste: yup.string().trim().required("caste is required"),
    SubCast: yup.string().trim().required("SubCaste is required"),
    SelfWorth: yup.number().required("SelfWorth is required"),
    FamilyWorth: yup.number().required("FamilyWorth is required"),
    DependentMember: yup.number().required("DependentMember is required"),
    MotherName: yup.string().trim().required("MotherName is required"),
    FatherName: yup.string().trim().required("FatherName is required"),
    isMotherAlive: yup.string().trim().required("Field is required"),
    isFatherAlive: yup.string().trim().required("Field is required")
})

export const AstronomicInfoSchema = yup.object({
    SunSign: yup.string().trim().required("SunSign is required"),
    MoonSign: yup.string().trim().required("MoonSign is required"),
    TimeOfBirth: yup.string().trim().required("Time Of Birth is required "),
    CityOfBirth: yup.string().trim().required("City Of Birth required")
})

export const PresentAddressSchema = yup.object({
    Country: yup.string().trim().required("Country is required"),
    State: yup.string().trim().required("State is required"),
    City: yup.string().trim().required("City is required"),
    Pincode: yup.string().trim().required("Pin code is required"),
    ResidencyType: yup.string().trim().required("ResidencyType is required"),
    ResidencySince: yup.number().required("ResidencySince is required")
})

export const PermanentAddressSchema = yup.object({
    Country: yup.string().trim().required("Country is required"),
    State: yup.string().trim().required("State is required"),
    City: yup.string().trim().required("City is required"),
    Pincode: yup.string().trim().required("Pin code is required")
})

export const PartnerExpectionSchema = yup.object({
    GernalRequirement: yup.string().trim().required(" field is required"),
    ResidenceCountry: yup.string().trim().required(" field is required"),
    Height: yup.number().required(" field is required"),
    weight: yup.number().required(" field is required"),
    MaritalStatus: yup.string().trim().required(" field is required"),
    Children: yup.number().min(0).required("field is required"),
    Religion: yup.string().trim().required(" field is required"),
    Caste: yup.string().trim().required(" field is required"),
    SubCaste: yup.string().trim().required(" field is required"),
    Language: yup.string().trim().required(" field is required"),
    Education: yup.string().trim().required(" field is required"),
    Profession: yup.string().trim().required(" field is required"),
    SmokingAcceptable: yup.string().trim().required(" field is required"),
    DrinkAcceptable: yup.string().trim().required(" field is required"),
    DietAcceptable: yup.string().trim().required(" field is required"),
    personalValue: yup.number().required(" field is required"),
    FamilyValue: yup.number().required(" field is required"),
    Manglik: yup.string().trim().required(" field is required"),
    PreferredCountry: yup.string().trim().required(" field is required"),
    PreferredState: yup.string().trim().required(" field is required"),
    Complexion: yup.string().trim().required(" field is required"),
})