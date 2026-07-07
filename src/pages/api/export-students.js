import { verifySession, getStudents } from '../../data/db.js';

export const prerender = false;

async function checkAuth(cookies) {
  const token = cookies.get('admin_session')?.value;
  return await verifySession(token);
}

// Helper to escape values for CSV
function csvEscape(val) {
  if (val === null || val === undefined) return '';
  let str = String(val);
  // Replace newlines with spaces
  str = str.replace(/[\r\n]+/g, ' ');
  // If contains double quotes, commas, or spaces, wrap in double quotes and escape existing double quotes
  if (str.includes('"') || str.includes(',') || str.includes(' ')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET({ cookies }) {
  if (!(await checkAuth(cookies))) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const list = await getStudents();

    // Sort by date descending
    list.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Define CSV Headers
    const headers = [
      'Student Name',
      'Mobile Number',
      'WhatsApp Number',
      'Email',
      'Program Type',
      'Selected Program',
      'Learning Mode',
      'Date of Registration',
      'Status',
      'Message'
    ];

    const csvRows = [headers.join(',')];

    for (const s of list) {
      const row = [
        csvEscape(s.name),
        csvEscape(s.mobile),
        csvEscape(s.whatsapp),
        csvEscape(s.email),
        csvEscape(s.programType === 'course' ? 'Course' : 'Internship'),
        csvEscape(s.programName),
        csvEscape(s.learningMode),
        csvEscape(s.date ? new Date(s.date).toLocaleDateString() : ''),
        csvEscape(s.status),
        csvEscape(s.message)
      ];
      csvRows.push(row.join(','));
    }

    const csvContent = csvRows.join('\n');

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="margdarshak_registered_students.csv"',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (err) {
    console.error('Error exporting CSV:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
