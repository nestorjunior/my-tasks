import * as Tabs from "@radix-ui/react-tabs";
import TabLogin from "@/components/Auth/TabLogin";
import TabCreateAccount from "@/components/Auth/TabCreateAccount";

export default function TabsComponent() {
  return (
    <Tabs.Root className="flex flex-col" defaultValue="tab1">
      <Tabs.List className="flex flex-row justify-between">
        <Tabs.Trigger
          value="tab1"
          className="basis-1/2 border border-gray-200 bg-gray-100 p-4 rounded-md hover:bg-[#3183FF] hover:text-white focus:text-white focus:bg-[#3183FF] text-sm font-medium data-[state=active]:bg-[#3183FF] data-[state=active]:text-white transition-colors duration-300 ease-in-out mr-1"
        >
          Login
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="basis-1/2 border border-gray-200 bg-gray-100 p-4 rounded-md hover:bg-[#3183FF] hover:text-white focus:text-white focus:bg-[#3183FF] text-sm font-medium data-[state=active]:bg-[#3183FF] data-[state=active]:text-white transition-colors duration-300 ease-in-out"
        >
          Create Account
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        value="tab1"
        className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200"
      >
        <TabLogin />
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200"
      >
        <TabCreateAccount />
      </Tabs.Content>
    </Tabs.Root>
  );
}
