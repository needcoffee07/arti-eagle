export function resolveProjectStatusVariant(stat) {
  if (stat === 'Schedulled' || stat === 'SCHEDULED')
    return { status:'Non Demarré', color:'secondary' }
  if (stat === 'In Progress'|| stat === 'IN_PROGRESS')
    return { status:'En Cours', color:'info' }
  if (stat === 'Stopped' || stat === 'STOPPED')
    return { status:'Suspendu', color:'warning' }
  if (stat === 'Failled' || stat === 'FAILLED')
    return { status:'Echec', color:'error' }
  if (stat === 'Finished' || stat === 'FINISHED')
    return { status:'Terminé', color:'success' }
}


export function resolveProjectStatusVariantWithoutColor(stat) {
  if (stat === 'Schedulled' || stat === 'SCHEDULED')
    return 'Non Demarré'
  if (stat === 'In Progress'|| stat === 'IN_PROGRESS')
    return 'En Cours'
  if (stat === 'Stopped' || stat === 'STOPPED')
    return 'Suspendu'
  if (stat === 'Finished' || stat === 'FINISHED')
    return 'Terminé'
  else {
    return stat
  }
}

export function resolveLocalDateVariant (d) {
  const date = new Date(d)
  const options = { year: 'numeric', month: 'short', day: '2-digit' }
  
  return date.toLocaleDateString('fr-FR', options)
}

export function resolveLocalDateVariantLong (d) {
  const date = new Date(d)
  const options = { year: 'numeric', month: 'long', day: '2-digit' }
  
  return date.toLocaleDateString('fr-FR', options)
}

export function resolveLocalDateVariantMY (d) {
  const date = new Date(d)
  const options = { year: 'numeric', month: 'long' }
  
  return date.toLocaleDateString('fr-FR', options)
}

export function resolveActivityProgression(activity) {
  return activity.finished/activity.nb*100
}

export function zerofill(number) {
  return number.toString().padStart(2, '0')
}

export function subStringNameForAvatar (name) {
  let split = name.split(" ", 2)
  
  return split[0] + " " + split[1]
}

export function subStringProjectTypeForAvatar (name) {
  let split = name.split(" ", 2)
  
  return split[0] + ""
}

export function timeDiff(start, end="08:10") {
  // Time should be in format hh:mm
  const startMin = (parseInt(start.slice(0, 2)) * 60) + parseInt(start.slice(3))
  const endMin = (parseInt(end.slice(0, 2)) * 60) + parseInt(end.slice(3))
  
  return endMin - startMin
}

export function fullTimeToHourMinuteFormatter(timeString){
  const [hours, minutes] = timeString.split(':')
  
  return `${hours}:${minutes}`
}

export function getWorkDaysInMonth(dateString) {
  const date = new Date(dateString)
  const month = date.getMonth()
  const year = date.getFullYear()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  let workDays = 0
  
  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(year, month, i).getDay()
    if (day !== 0 && day !== 6) {
      workDays++
    }
  }
  
  return workDays
}

export const currentDate = () => {
  const date = new Date()
  
  return date.toLocaleDateString('fr-FR')
}

export function currentDateYmd(){
  // Create a new Date object for the current date
  const currentDate = new Date()

  // Get the year, month, and day components of the current date
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Add 1 to month as it is zero-indexed
  const day = String(currentDate.getDate()).padStart(2, '0')

  // Format the date as "Y-m-d"
  return `${year}-${month}-${day}`
}

export function getLastDateOfMonth(datestring){
  // Create a new Date object for the current date
  const currentDate = new Date(datestring)

  // Get the current year and month
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  // Create a new Date object for the first day of the next month
  const firstDayOfNextMonth = new Date(currentYear, currentMonth + 1, 1)

  // Subtract one day to get the last day of the current month
  const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth.getTime() - (24 * 60 * 60 * 1000))

  // Format the date as 'YYYY-mm-dd'
  return lastDayOfCurrentMonth.toISOString().slice(0, 10)
}



