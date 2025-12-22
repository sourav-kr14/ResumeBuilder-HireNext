// import { Divider, styled, alpha } from '@mui/material';
// import Link from '@mui/material/Link';
// import { OutlinedButton } from '@/helpers/common/atoms/Buttons';

// import { TemplateSlider } from './TemplatesSlider';

// export const StyledLink = styled(Link)(({ theme }) => ({
//   color: theme.palette.resume[800],
//   borderColor: theme.palette.resume[100],
//   ':hover': {
//     borderColor: theme.palette.resume[800],
//     backgroundColor: alpha(theme.palette.resume[800], 0.04),
//   },
// }));

// export const TemplateSelect = () => {
//   return (
//     <div
//       className={`md:h-[459px] md:w-[600px] bg-white flex flex-col px-3 md:px-10 py-[23px] shadow-2xl`}
//     >
//       <TemplateSlider />
//       <Divider />
//       <span className="text-resume-800 font-bold text-lg my-[14px]">
//         View 100K+ IT Jobs
//       </span>
//       <div>
//         <OutlinedButton
//           onClick={() => {
//             window.open('https://hirenext-alpha.vercel.app/all-jobs/', '_blank');
//           }}
//         >
//         Quick Apply
//         </OutlinedButton>
//       </div>
//     </div>
//   );
// };

import { OutlinedButton } from '@/helpers/common/atoms/Buttons';
import { TemplateSlider } from './TemplatesSlider';

export const TemplateSelect = () => {
  return (
    <div className="md:w-[480px] bg-white flex flex-col px-4 md:px-8 py-6 shadow-2xl rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-500 font-semibold text-sm">Choose Template</h2>
      </div>
      <TemplateSlider />
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-resume-800 font-bold text-lg block mb-3">View 100K+ IT Jobs</span>
        <OutlinedButton
          className="w-full"
          onClick={() => {
            window.open('https://hirenext-alpha.vercel.app/all-jobs/', '_blank');
          }}
        >
          Quick Apply
        </OutlinedButton>
      </div>
    </div>
  );
};
