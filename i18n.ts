import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";

const locales = ['en', 'zh'];

export default getRequestConfig(async ({locale}) => {
  if(!locales.includes(locale as any)) notFound()

  return {
    // .default treats JSON file as ESM JavaScript
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})