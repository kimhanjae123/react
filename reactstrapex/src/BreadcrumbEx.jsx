import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function BreadcrumbEx(){
    return(
        <>
            <Breadcrumb tag="nav">
                <BreadcrumbItem tag="a" href="http://www.naver.com">Naver</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="http://www.daum.net">Daum</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="http://www.kakao.com">Kakao</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="http://www.google.com">Google</BreadcrumbItem>
            </Breadcrumb>
        </>
    )
}