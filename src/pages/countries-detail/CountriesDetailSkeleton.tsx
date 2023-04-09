import { BackButton } from 'src/components/back-button'
import { Container } from 'src/ui/container'

export default () => {
  return (
    <div className="py-8 w-full">
      <Container>
        <BackButton className="mb-6" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="h-64 sm:h-72 w-full md:w-1/2 md:pr-8 lg:h-80">
            <div className="w-full h-full bg-slate-200 dark:bg-dark-blue  rounded-md"></div>
          </div>
          <div className="py-6 w-full md:w-1/2 flex flex-col justify-center">
            <div className="rounded-md bg-slate-200 dark:bg-dark-blue mb-4 h-5"></div>
            <div className="flex flex-col justify-between x-sm:flex-row mb-2">
              <div className="flex-1 mb-3 x-sm:mb-0">
                {Array.from({ length: 5 }, (_, i) => i).map((e) => (
                  <div
                    key={e}
                    className="w-full max-w-[150px] rounded-md bg-slate-200 dark:bg-dark-blue mb-1 h-5"
                  ></div>
                ))}
              </div>
              <div className="flex-1">
                {Array.from({ length: 3 }, (_, i) => i).map((e) => (
                  <div
                    key={e}
                    className="w-full max-w-[150px] rounded-md bg-slate-200 dark:bg-dark-blue mb-1 h-5"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap flex-row gap-3 mb-5">
              {Array.from({ length: 3 }, (_, i) => i).map((e) => (
                <div
                  key={e}
                  className="w-full max-w-[150px] rounded-md bg-slate-200 dark:bg-dark-blue mb-1 h-5"
                ></div>
              ))}
            </div>
            <div className="w-full md:max-w-[150px] h-10 rounded-md bg-slate-200 dark:bg-dark-blue mb-1"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
