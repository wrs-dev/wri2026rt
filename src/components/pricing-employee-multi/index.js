export default function PricingEmployeeMulti() {
  return (
    <section className="px-0 lg:px-12">
      <div className="mb-0 overflow-hidden bg-white shadow-md rounded-3xl" style={{
        height: '100%',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="px-8 py-4 bg-yellow-500" style={{
          minHeight: '5rem',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <h1 className="text-xl font-bold text-blue-950">
            Rail Transit Agency/Government Employee Registration - Multi-Event Pricing
          </h1>
        </div>
        <div className="px-8 pt-6 pb-8" style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          minHeight: '200px'
        }}>
          <div className="mb-0">
            <h2 className="font-semibold text-md text-blue-950">
              Rail Transit Seminar <em>Plus</em> Principles Course (3 Days)
            </h2>
            <h2 className="text-md text-wri-blue">
              Cost: <span className="text-gray-500 line-through">$1,300</span> $1,170 Early Bird
            </h2>
            <p className="text-gray-500 text-md">
              September 1-3, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}