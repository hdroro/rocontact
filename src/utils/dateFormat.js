export const convertToYearDMY = (currentDate_) => {
  const currentDate = new Date(currentDate_);
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const dateFormat = (date_) => {
  const date = new Date(date_);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth();
  const day = date.getDate();

  return `${day} ${monthNames[monthIndex]}`;
};

export const getDayOfWeek = (date_) => {
  const date = new Date(date_);

  return date.toLocaleDateString("en-US", { weekday: "long" });
};
