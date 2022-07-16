import { Sections, SectionsHeader, SectionsTitle, SectionsBody } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <Sections>
        <SectionsHeader>
            <SectionsTitle>{title}</SectionsTitle>
            {extraHeaderContent}
        </SectionsHeader>
        <SectionsBody>
            {body}
        </SectionsBody>
    </Sections>
);

export default Section;