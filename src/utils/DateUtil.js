const dateformatter = new Intl.DateTimeFormat("default",{
    // dateStyle: "medium",
    // hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"2-digit",
});

export const formatDate = (date) => dateformatter.format(date);