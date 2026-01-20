import FooterBadges from "./FooterBadges";
import FooterLegal from "./FooterLegal";
import FooterSocial from "./FooterSocial";

export default function FooterBottom() {
    return (
        <>
            <div
                className="
                    w-full lg:w-fit block  
                    md:flex md:justify-between md:items-center 
                    lg:gap-50 xl:gap-92
                    md:px-6 lg:px-8.5 xl:px-10.25 md:border-t md:border-gray-200
                "
            >
                {/* Vista mobile y md: */}
                <div className="lg:hidden">
                    <FooterSocial />
                </div>
                <div className="lg:hidden">
                    <FooterBadges />
                </div>

                {/* Vista lg: */}
                <div className="hidden lg:block lg:order-1">
                    <FooterLegal />
                </div>

                <div className="hidden lg:flex lg:items-center lg:gap-5 lg:order-2">
                    <div className="px-8 py-15 xl:px-10 xl:py-15.25 border-x border-gray-200">
                        <FooterSocial />
                    </div>
                    <FooterBadges />
                </div>
            </div>

            {/* Vista mobile y md: */}
            <div className="block lg:hidden">
                <FooterLegal />
            </div>
        </>
    )
}
