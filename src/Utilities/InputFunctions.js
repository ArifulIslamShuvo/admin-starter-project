import SelectOption from "../Components/Partials/Layouts/Forms/FormInputs/SelectInput/SelectOption/SelectOption";

export function generateSelectOptions(start, end, array) {
    const rows = []
    for (let i = start; i <= end; i++) {
        rows.push(
            <SelectOption 
                key={i} 
                optionText={array ? array[i] : i} 
                optionValue={parseInt(i)} 
            />
        )
    }
    return rows;
}