export const dateStringToDateObject = (dateString: string): Date => {
  // "10/08/2018" => [10, 8, 2018]
  const dateArray = dateString
                    .split('/')
                    .map((datePart: string): number => {
                      return parseInt(datePart);
                    });

  // month is zero-indexed in the Date constructor, 
  // so 1 must be subtracted from yearMonthDateArray[1]
  // Ex: month = 1 | 1 - 1 = 0 | 0 => January
  const year = dateArray[2];
  const month = dateArray[1] - 1;
  const day = dateArray[0];
  
  return new Date(year, month, day);
};