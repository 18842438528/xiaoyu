import { MainTypeComponent } from "./mainTypeComponent"
export const MainType = () => {
  return (
    <div className="home-main-type">
      <MainTypeComponent typeName='All Categories' />
      <MainTypeComponent typeName='Life Coachers' />
      <MainTypeComponent typeName='Boutique Stores' />
      <MainTypeComponent typeName='Local Celebrity' />
      <MainTypeComponent typeName='Cooking / Baking' />
      <MainTypeComponent typeName='Artists' />
      <MainTypeComponent typeName='Parenting' />
    </div>
  )
}