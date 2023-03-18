import Layout from "@/components/layout";
import ServiceItem from "@/components/ui/ServiceItem/ServiceItem";

import { Vk } from "@/assets/icons/Vk";

export default function partners() {
    return (
        <Layout>
            <ServiceItem title="test" icon={<Vk />}/>
        </Layout>
    );
}
