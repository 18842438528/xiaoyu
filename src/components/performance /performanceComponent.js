import '../../styles/performanceStyle.scss'
import { PerformanceHeader } from './performanceHeader/headerComponent'
import { PerformanceCancel } from './performanceHeader/cancelComponent'
import { PerformanceMain } from './performanceHeader/mainComponent'
export const PerformanceComponent = () => {
  return (
    <>
      <PerformanceHeader />
      <PerformanceCancel />
      <PerformanceMain />
    </>
  )
}