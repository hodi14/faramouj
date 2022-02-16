import HomeCategoryCard from "./HomeCategoryCard";

export default function HomeCategories() {
  return (
    <div className="homeCategories">
      <div className="centeredContent">
        <HomeCategoryCard
          nameEnglish="SEO"
          namePersian="سئو"
          picture={false}
          link="/seo"
        />

        <HomeCategoryCard
          nameEnglish="WEB DESIGN"
          namePersian="طراحی سایت"
          picture="webCategory.png"
          link="/webDesign"
        />
        <HomeCategoryCard
          nameEnglish="CONTENT CREATION"
          namePersian="تولید محـــــتوا"
          picture={false}
          link="/contentCreation"
        />
      </div>
    </div>
  );
}
