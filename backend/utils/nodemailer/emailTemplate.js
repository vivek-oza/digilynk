/**
 * Minimal Sleek Bento UI Email Template for Nodemailer
 * 
 * This function generates HTML for a beautifully styled email template
 * with a minimal and sleek design that can be used with Nodemailer.
 * 
 * @param {Object} data - The inquiry data object
 * @returns {String} - HTML string to use with Nodemailer
 */

// Define accent colors as constants
const accentColors = {
  blue: "#3B82F6",
  green: "#10B981",
  purple: "#8B5CF6"
};

// Define background colors
const bgColors = {
  main: "#F1F5F9", // Slightly darker than before
  card: "#FFFFFF",
  dark: "#1E293B"  // Dark background for logo
};

/**
 * Generate HTML email template with minimal sleek Bento UI styling
 */
const bentoEmailTemplate = (data) => {
  // Ensure services is an array even if it's empty or undefined
  const services = Array.isArray(data.services) ? data.services : [];

  // Generate service tags with alternating colors
  const colors = ['blue', 'green', 'purple'];
  const serviceTags = services.map((service, index) => {
    const colorClass = colors[index % colors.length];
    return `<span style="display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; color: white; background-color: ${accentColors[colorClass]}; margin: 0 4px 8px 0;">${service}</span>`;
  }).join('');

  // Format current date
  const currentDate = new Date().toLocaleString();

  // Return the complete HTML template with inline styles for email compatibility
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry - Minimal Bento UI</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap');
  </style>
</head>
<body style="font-family: 'Hanken Grotesk', Arial, sans-serif; background-color: ${bgColors.main}; color: #18181B; padding: 24px; border-radius:20px; line-height: 1.6; margin: 0;">
  <div style="max-width: 800px; margin: 0 auto;">
    <!-- Important notice bar -->
    <div style="background-color: ${accentColors.blue}; color: white; text-align: center; padding: 12px; border-radius: 12px; margin-bottom: 24px; font-weight: 500;">
      Please respond to the client within 24 hours
    </div>
    
    <!-- Header -->
    <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px; padding: 20px; border-radius: 12px; background-color: white; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);">
      <div style="background-color: white; padding: 12px;">
        <img src="${data.logoURL || 'https://ik.imagekit.io/digilynk/digilynk_logo_dark.png'}" alt="Company Logo" style="width: 60px; height: 60px; object-fit: contain;">
      </div>
      <div style="flex: 1; margin-start:5px;">
        <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 5px; margin-top: 0; color: #1E293B;">New Client Inquiry</h1>
        <div style="font-size: 14px; color: #64748B;">Submitted: ${currentDate}</div>
      </div>
    </div>
    
    <!-- Bento Grid -->
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td valign="top" width="33%" style="padding-right: 12px;">
          <!-- Contact Information Card -->
          <div style="background: ${bgColors.card}; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); position: relative; overflow: hidden; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${accentColors.blue}; margin-right: 10px;"></div>
              <h2 style="font-weight: 600; font-size: 16px; margin: 0; color: #1E293B;">Contact Details</h2>
            </div>
            <div>
              <div style="margin-bottom: 16px;">
                <div style="font-weight: 500; font-size: 13px; color: #64748B; margin-bottom: 6px;">Name</div>
                <div style="font-weight: 500; font-size: 15px; word-break: break-word; color: ${accentColors.blue};">${data.name}</div>
              </div>
              <div style="margin-bottom: 16px;">
                <div style="font-weight: 500; font-size: 13px; color: #64748B; margin-bottom: 6px;">Email</div>
                <div style="font-weight: 500; font-size: 15px; word-break: break-word;">${data.email}</div>
              </div>
              <div style="margin-bottom: 0;">
                <div style="font-weight: 500; font-size: 13px; color: #64748B; margin-bottom: 6px;">Phone</div>
                <div style="font-weight: 500; font-size: 15px; word-break: break-word;">${data.phone}</div>
              </div>
            </div>
          </div>
        </td>
        
        <td valign="top" width="33%" style="padding-left: 12px; padding-right: 12px;">
          <!-- Project Details Card -->
          <div style="background: ${bgColors.card}; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); position: relative; overflow: hidden; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${accentColors.green}; margin-right: 10px;"></div>
              <h2 style="font-weight: 600; font-size: 16px; margin: 0; color: #1E293B;">Project Details</h2>
            </div>
            <div>
              <div style="margin-bottom: 16px;">
                <div style="font-weight: 500; font-size: 13px; color: #64748B; margin-bottom: 6px;">Budget</div>
                <div style="font-weight: 500; font-size: 15px; word-break: break-word; color: ${accentColors.green};">${data.budget}</div>
              </div>
              <div style="margin-bottom: 0;">
                <div style="font-weight: 500; font-size: 13px; color: #64748B; margin-bottom: 6px;">Discovery Source</div>
                <div style="font-weight: 500; font-size: 15px; word-break: break-word;">${data.discoverySource}</div>
              </div>
            </div>
          </div>
        </td>
        
        <td valign="top" width="33%" style="padding-left: 12px;">
          <!-- Services Card -->
          <div style="background: ${bgColors.card}; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); position: relative; overflow: hidden; margin-bottom: 24px;">
            <div style="display: flex; flex-direction:column; align-items: center; margin-bottom: 20px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${accentColors.purple}; margin-right: 10px;"></div>
              <h2 style="font-weight: 600; font-size: 16px; margin: 0; color: #1E293B;">Services Needed</h2>
            </div>
            <div style="display: flex; flex-wrap: wrap;">
              ${serviceTags}
            </div>
          </div>
        </td>
      </tr>
    </table>
    
    <!-- Message Card (Full Width) -->
    <div style="background: ${bgColors.card}; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); position: relative; overflow: hidden; margin-bottom: 24px;">
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${accentColors.blue}; margin-right: 10px;"></div>
        <h2 style="font-weight: 600; font-size: 16px; margin: 0; color: #1E293B;">Client Message</h2>
      </div>
      <div style="background: #F8FAFC; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6; border: 1px solid rgba(0, 0, 0, 0.05);">
        ${data.message}
      </div>
    </div>
    
    <!-- Subtle Accent Color Dots -->
    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
      <tr>
        <td align="center">
          <table cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="padding: 0 6px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${accentColors.blue};"></div>
              </td>
              <td style="padding: 0 6px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${accentColors.green};"></div>
              </td>
              <td style="padding: 0 6px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${accentColors.purple};"></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
    <!-- Footer -->
    <div style="text-align: center; font-size: 14px; color: #64748B; padding: 10px;">
      <p style="margin: 0;">© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;
};

// Export the template function
export const inquiryTemplate = (data) => bentoEmailTemplate(data);